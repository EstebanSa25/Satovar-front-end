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
                <div className='row container-medidas border'>
                    <UserMeasureShirt />
                    <UserSuitJacket />
                    <UserPant />
                    <UserWaistcoat />
                </div>
            </div>
        </>
    );
};
