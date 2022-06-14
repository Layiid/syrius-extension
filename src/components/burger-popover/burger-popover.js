import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zenon } from 'znn-ts-sdk';

const BurgerPopover = () => {
  const zenon = Zenon.getSingleton();
  const navigate = useNavigate();

  const lockWallet = ()=>{
    zenon.clearSocketConnection();
    clearCredentialsOfBackgroundScript();
    navigate('/password');
  }

  const addWallet = ()=>{
    clearCredentialsOfBackgroundScript();
    navigate('/auth');
  }

  const clearCredentialsOfBackgroundScript = ()=>{
    chrome.runtime.sendMessage({
      message: "internal.clearCredentialsOfBackgroundScript",
    })  
  }

  const goToSettings = () => {
    navigate('settings');
  }

  return (
    <div>
      <div className="burger-popover-backdrop"></div>
      <div className="burger-popover-container">
          <div onClick={()=>goToSettings()} className="burger-popover-item d-flex p-2 align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path className="isColorable" d="M7.08241 2.06964C7.3168 2.3262 7.64726 2.48034 7.9999 2.48034C8.35255 2.48034 8.68304 2.33359 8.91743 2.06964L9.51184 1.40869C9.86448 1.02015 10.423 0.894511 10.9066 1.093C11.3912 1.2915 11.6921 1.77612 11.671 2.29663L11.6267 3.18564C11.6119 3.53723 11.7365 3.87509 11.9856 4.12532C12.2359 4.37449 12.5737 4.50646 12.9253 4.48429L13.8143 4.441C14.3359 4.41144 14.8194 4.71973 15.0179 5.20435C15.2164 5.68897 15.0918 6.24644 14.7022 6.59908L14.0413 7.19351C13.7847 7.4279 13.6306 7.75837 13.6306 8.11102C13.6306 8.46366 13.7773 8.79413 14.0413 9.02852L14.7022 9.62295C15.0918 9.97559 15.2164 10.5341 15.0179 11.0177C14.8194 11.5023 14.3359 11.8032 13.8143 11.7821L12.9253 11.7377C12.5737 11.723 12.2359 11.8475 11.9856 12.0978C11.7365 12.3469 11.6045 12.6848 11.6267 13.0364L11.671 13.9254C11.6995 14.4459 11.3912 14.9305 10.9066 15.129C10.423 15.3275 9.86448 15.2029 9.51184 14.8133L8.91743 14.1524C8.68304 13.8958 8.35255 13.7417 7.9999 13.7417C7.64726 13.7417 7.3168 13.8884 7.08241 14.1524L6.488 14.8133C6.13536 15.2029 5.57787 15.3275 5.09325 15.129C4.60863 14.9305 4.30773 14.4459 4.32991 13.9254L4.37318 13.0364C4.38796 12.6848 4.26338 12.3469 4.0142 12.0978C3.76398 11.8475 3.42613 11.7156 3.07455 11.7377L2.18554 11.7821C1.66502 11.8106 1.18042 11.5023 0.981924 11.0177C0.783431 10.5341 0.909053 9.97559 1.29759 9.62295L1.95854 9.02852C2.2151 8.79413 2.36926 8.46366 2.36926 8.11102C2.36926 7.75837 2.2225 7.4279 1.95854 7.19351L1.29759 6.59908C0.909053 6.24644 0.783431 5.68897 0.981924 5.20435C1.18042 4.71973 1.66502 4.41883 2.18554 4.441L3.07455 4.48429C3.42613 4.49907 3.76398 4.37449 4.0142 4.12532C4.26338 3.87509 4.39535 3.53723 4.37318 3.18564L4.32991 2.29663C4.30034 1.77612 4.60863 1.2915 5.09325 1.093C5.57787 0.894511 6.13536 1.02015 6.488 1.40869L7.08241 2.06964Z" fill="white"/>
              <path d="M7.99984 10.9519C9.56878 10.9519 10.841 9.67967 10.841 8.11073C10.841 6.54178 9.56878 5.26953 7.99984 5.26953C6.4309 5.26953 5.15866 6.54178 5.15866 8.11073C5.15866 9.67967 6.4309 10.9519 7.99984 10.9519Z" fill="#1B1B1B"/>
            </svg>
            <span className="ml-2">Settings</span>
          </div>
          <div onClick={()=>lockWallet()} className="burger-popover-item d-flex p-2 align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path className="isColorable" fillRule="evenodd" clipRule="evenodd" d="M1.88892 8.42502C1.88892 7.38236 2.82579 6.53613 3.98121 6.53613H13.7453C14.9008 6.53613 15.8376 7.38236 15.8376 8.42502V14.7217C15.8376 15.7644 14.9008 16.6106 13.7453 16.6106H3.98121C2.82579 16.6106 1.88892 15.7644 1.88892 14.7217V8.42502ZM9.85015 10.0535C9.58745 9.81757 9.23292 9.68504 8.86328 9.68504C8.49363 9.68504 8.13911 9.81757 7.8764 10.0535C7.61487 10.2895 7.46839 10.6103 7.46839 10.9439C7.46839 11.4089 7.7497 11.8076 8.16583 12.0261V13.4628C8.16583 13.8092 8.47852 14.0917 8.86328 14.0917C9.24803 14.0917 9.56072 13.8092 9.56072 13.4628V12.0261C9.97686 11.8076 10.2582 11.4089 10.2582 10.9439C10.2582 10.6103 10.1117 10.2895 9.85015 10.0535Z" fill="white"/>
              <path className="isColorable" d="M8.86342 1.5C7.32209 1.5 5.98883 2.07772 5.15772 3.01461C4.32894 3.95266 3.98135 5.16853 3.98135 6.47738V8.42555H6.07368V6.47738C6.07368 5.48354 6.34451 4.70239 6.79319 4.19559C7.24071 3.68879 7.84633 3.38889 8.86342 3.38889C9.884 3.38889 10.4873 3.67252 10.9336 4.17583C11.38 4.67915 11.6532 5.47307 11.6532 6.47738V7.16667H13.7455V6.47738C13.7455 5.16039 13.3782 3.93174 12.5471 2.99485C11.7159 2.05912 10.4024 1.5 8.86342 1.5Z" fill="white"/>
            </svg>
            <span className="ml-2">Lock wallet</span>
          </div>
          <div className="burger-popover-item d-flex p-2 align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path className="isColorable" fillRule="evenodd" clipRule="evenodd" d="M17 9.00071C17 11.1222 16.1579 13.1562 14.6571 14.6571C13.1562 16.1579 11.1222 17 9.00071 17C6.87781 17 4.8438 16.1579 3.34296 14.6571C1.84353 13.1562 1 11.1222 1 9.00071C1 6.87781 1.84353 4.8438 3.34296 3.34296C4.8438 1.84353 6.87781 1 9.00071 1C11.1222 1 13.1562 1.84353 14.6571 3.34296C16.1579 4.8438 17 6.87781 17 9.00071ZM7.57039 7.03299H6.25009C6.22047 5.14707 7.68042 4.49959 9.00635 4.49959C10.4028 4.49959 11.6794 5.23028 11.6794 6.73958C11.6794 7.82007 11.0446 8.33354 10.4353 8.79761C9.69753 9.3562 9.42528 9.56493 9.42528 10.2829V10.6384H8.11769L8.11063 10.1757C8.07254 9.24757 8.60574 8.67771 9.27858 8.18824C9.86819 7.74391 10.2434 7.45191 10.2434 6.81715C10.2434 5.99197 9.61572 5.6492 8.92878 5.6492C8.02884 5.6492 7.57181 6.25154 7.57181 7.03299H7.57039ZM8.82159 13.4764C8.23762 13.4764 7.81162 13.0829 7.81162 12.5497C7.81162 11.9967 8.23762 11.6088 8.82159 11.6088C9.43096 11.6088 9.84986 11.9967 9.84986 12.5497C9.84986 13.0829 9.42954 13.4764 8.82159 13.4764Z" fill="white"/>
            </svg>
            <span className="ml-2">Help&Support</span>
          </div>
          <div onClick={()=>addWallet()} className="burger-popover-item d-flex p-2 align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path className="isColorable" d="M9 2.5V15.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path className="isColorable" d="M2.5 9L15.5 9" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span className="ml-2">Add wallet</span>
          </div>
      </div>
    </div>
  );
};

export default BurgerPopover;