import {
    UserInfo,
    UserMeasureShirt,
    UserPant,
    UserSuitJacket,
    UserWaistcoat,
} from '../components';

export const UserProfilePage = () => {
    return (
        <>
            <UserInfo />
            <div className='datos-medidas'>
                <div className='row container-medidas border animate__animated animate__fadeIn '>
                    <UserMeasureShirt />
                    <UserSuitJacket />
                    <UserPant />
                    <UserWaistcoat />
                </div>
            </div>
        </>
    );
};
