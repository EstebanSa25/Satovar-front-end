const E = (e, n) => n.some((t) => e instanceof t);
let l, w;
function M() {
    return (
        l ||
        (l = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    );
}
function L() {
    return (
        w ||
        (w = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ])
    );
}
const b = new WeakMap(),
    m = new WeakMap(),
    p = new WeakMap(),
    f = new WeakMap(),
    I = new WeakMap();
function g(e) {
    const n = new Promise((t, o) => {
        const i = () => {
                e.removeEventListener('success', c),
                    e.removeEventListener('error', r);
            },
            c = () => {
                t(a(e.result)), i();
            },
            r = () => {
                o(e.error), i();
            };
        e.addEventListener('success', c), e.addEventListener('error', r);
    });
    return (
        n
            .then((t) => {
                t instanceof IDBCursor && b.set(t, e);
            })
            .catch(() => {}),
        I.set(n, e),
        n
    );
}
function P(e) {
    if (m.has(e)) return;
    const n = new Promise((t, o) => {
        const i = () => {
                e.removeEventListener('complete', c),
                    e.removeEventListener('error', r),
                    e.removeEventListener('abort', r);
            },
            c = () => {
                t(), i();
            },
            r = () => {
                o(e.error || new DOMException('AbortError', 'AbortError')), i();
            };
        e.addEventListener('complete', c),
            e.addEventListener('error', r),
            e.addEventListener('abort', r);
    });
    m.set(e, n);
}
let y = {
    get(e, n, t) {
        if (e instanceof IDBTransaction) {
            if (n === 'done') return m.get(e);
            if (n === 'objectStoreNames') return e.objectStoreNames || p.get(e);
            if (n === 'store')
                return t.objectStoreNames[1]
                    ? void 0
                    : t.objectStore(t.objectStoreNames[0]);
        }
        return a(e[n]);
    },
    set(e, n, t) {
        return (e[n] = t), !0;
    },
    has(e, n) {
        return e instanceof IDBTransaction && (n === 'done' || n === 'store')
            ? !0
            : n in e;
    },
};
function C(e) {
    y = e(y);
}
function S(e) {
    return e === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)
        ? function (n, ...t) {
              const o = e.call(h(this), n, ...t);
              return p.set(o, n.sort ? n.sort() : [n]), a(o);
          }
        : L().includes(e)
        ? function (...n) {
              return e.apply(h(this), n), a(b.get(this));
          }
        : function (...n) {
              return a(e.apply(h(this), n));
          };
}
function T(e) {
    return typeof e == 'function'
        ? S(e)
        : (e instanceof IDBTransaction && P(e),
          E(e, M()) ? new Proxy(e, y) : e);
}
function a(e) {
    if (e instanceof IDBRequest) return g(e);
    if (f.has(e)) return f.get(e);
    const n = T(e);
    return n !== e && (f.set(e, n), I.set(n, e)), n;
}
const h = (e) => I.get(e);
function A(e, n, { blocked: t, upgrade: o, blocking: i, terminated: c } = {}) {
    const r = indexedDB.open(e, n),
        u = a(r);
    return (
        o &&
            r.addEventListener('upgradeneeded', (s) => {
                o(a(r.result), s.oldVersion, s.newVersion, a(r.transaction), s);
            }),
        t &&
            r.addEventListener('blocked', (s) =>
                t(s.oldVersion, s.newVersion, s)
            ),
        u
            .then((s) => {
                c && s.addEventListener('close', () => c()),
                    i &&
                        s.addEventListener('versionchange', (d) =>
                            i(d.oldVersion, d.newVersion, d)
                        );
            })
            .catch(() => {}),
        u
    );
}
const j = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
    V = ['put', 'add', 'delete', 'clear'],
    D = new Map();
function B(e, n) {
    if (!(e instanceof IDBDatabase && !(n in e) && typeof n == 'string'))
        return;
    if (D.get(n)) return D.get(n);
    const t = n.replace(/FromIndex$/, ''),
        o = n !== t,
        i = V.includes(t);
    if (
        !(t in (o ? IDBIndex : IDBObjectStore).prototype) ||
        !(i || j.includes(t))
    )
        return;
    const c = async function (r, ...u) {
        const s = this.transaction(r, i ? 'readwrite' : 'readonly');
        let d = s.store;
        return (
            o && (d = d.index(u.shift())),
            (await Promise.all([d[t](...u), i && s.done]))[0]
        );
    };
    return D.set(n, c), c;
}
C((e) => ({
    ...e,
    get: (n, t, o) => B(n, t) || e.get(n, t, o),
    has: (n, t) => !!B(n, t) || e.has(n, t),
}));
export { A as o };
