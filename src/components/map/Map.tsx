export const Map = () => {
    return (
        <div id='map'>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.994863344234!2d-84.2148467544168!3d10.017281811747068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9c871fbddb3%3A0xb1f90fbc26bf36cb!2sProvincia%20de%20Alajuela%2C%20Alajuela!5e0!3m2!1ses-419!2scr!4v1702967002692!5m2!1ses-419!2scr'
                width='100%'
                height='500px'
                // frameborder='0'
                style={{
                    border: '0',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
                }}
                // allowFullScreen=''
            ></iframe>
        </div>
    );
};
