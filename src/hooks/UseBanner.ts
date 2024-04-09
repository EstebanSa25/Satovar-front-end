import { useState } from 'react';
const images = [
    {
        imagen: '/src/assets/images/traje-para-eventos-de-noche-re.jpg',
        categoria: 'Smoking',
        titulo: 'Satovar ¡Porque la primera impresión es la que vale!',
    },
    {
        imagen: '/src/assets/images/photo-boda-re.jpg',
        categoria: 'Exterior',
        titulo: 'Siéntete bien en un día tan especial',
    },
];
export const UseBanner = () => {
    const [image, setImage] = useState(images[0]);
    const [count, setCount] = useState(0);

    const changeImage = () => {
        switch (count) {
            case 0:
                setImage(images[1]);
                setCount(1);
                break;
            case 1:
                setImage(images[0]);
                setCount(0);
                break;
            default:
                break;
        }
    };
    return {
        image,
        changeImage,
    };
};
