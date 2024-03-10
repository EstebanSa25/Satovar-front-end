export const NavWrapper = () => {
    return (
        <div className='nav-wrapper '>
            <ul className='nav nav-tabs' role='tablist'>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link active'
                        id='appartment-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#appartment'
                        type='button'
                        role='tab'
                        aria-controls='appartment'
                        aria-selected='true'
                    >
                        Camisa
                    </button>
                </li>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link'
                        id='villa-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#villa'
                        type='button'
                        role='tab'
                        aria-controls='villa'
                        aria-selected='false'
                    >
                        Chaleco
                    </button>
                </li>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link'
                        id='penthouse-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#penthouse'
                        type='button'
                        role='tab'
                        aria-controls='penthouse'
                        aria-selected='false'
                    >
                        Pantalón
                    </button>
                </li>
                <li className='nav-item' role='presentation'>
                    <button
                        className='nav-link'
                        id='shirt-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#shirt'
                        type='button'
                        role='tab'
                        aria-controls='shirt'
                        aria-selected='false'
                    >
                        Saco
                    </button>
                </li>
            </ul>
        </div>
    );
};
