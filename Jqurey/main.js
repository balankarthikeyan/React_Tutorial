const renderHeader = () => {
  const pancakeIconName = "menu";
  const logo = `<svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="skava logo"
    version="1.1"
    role="img"
    viewBox="0 0 141 41"
    height="26"
    width="90"
    fill="#FFF"
    >
    <title>Skava logo</title>
    <desc>Skava is an ecommerce company</desc>
    <g fill-rule="evenodd">
        <path
        d="M103.013 6.594L96.105 25.84 89.197 6.594H78.312l13.293 33.003h8.817l13.293-33.003zM117.157 6.594l-13.948 33.003h10.293l2-5.107h12.259l1.99 5.107h10.476L126.4 6.875l-.122-.28h-9.12zm4.492 12.2l3.039 7.806h-6.094l3.055-7.806zM67.178 26.598l3.063-7.803 3.039 7.803h-6.102zm7.693-20.005h-9.12L55.94 29.8l-5.986-8.695 12.76-14.507H51.01l-10.553 12.44L40.272.444H30.52l.122 25.691c-1.537-4.552-6.749-6.363-12.315-7.59-4.669-1.07-5.417-1.682-5.405-2.818.01-.97 1.09-1.565 2.821-1.565h.09c3.345.037 6.124.902 8.752 2.713l.36.25 5.27-6.982-.37-.293c-3.515-2.77-7.607-3.982-13.684-4.05-.083 0-.164-.003-.247-.003-7.915 0-13.258 4.256-13.33 10.734-.075 7.15 6.068 9.162 12.915 10.743 4.466 1.041 5.275 1.721 5.265 2.77-.005.518-.257.911-.763 1.202-.586.338-1.442.528-2.63.494-4.886-.054-8.546-1.083-11.18-3.148l-.338-.264L0 34.897l.364.318c3.598 3.163 9.177 4.805 16.583 4.886.096.003.193.003.291.003 4.016 0 7.42-.951 9.859-2.76 1.784-1.325 2.984-3.075 3.573-5.165l.037 7.409h9.751v-8.419l2.716-3.021 7.844 11.44h11.061l2-5.097h12.276l1.987 5.104h10.48L74.99 6.876l-.12-.283zM132.755 6.893c1.527 0 2.684 1.205 2.684 2.701s-1.164 2.719-2.702 2.719c-1.53 0-2.684-1.205-2.684-2.701s1.162-2.719 2.702-2.719m-.018 5.718a3.019 3.019 0 0 0 3.02-3.017 2.993 2.993 0 0 0-3.002-3.001 3.017 3.017 0 0 0-3.017 3.019c0 1.645 1.313 2.999 3 2.999"
        ></path>
        <path
        d="M132.13 8.48h.781c.389 0 .624.174.624.5 0 .307-.235.498-.624.498h-.782v-.997zm0 1.521h.657l.765 1.088h.714l-.849-1.186c.433-.127.731-.442.731-.958 0-.63-.481-1.004-1.212-1.004h-1.403v3.148h.596v-1.088z"
        ></path>
    </g>
    </svg>`;
  const lanuage = props => {
    return props
      .map(item => {
        return `<option value="${item}">${item}</option>`;
      })
      .join()
      .replace(",", "");
  };
  return `<header class="main">
            <div class="header-logo">
                ${logo}
            </div>
            <div arrow="keyboard_arrow_down" class="header-language">
                <form>
                <label for="languageselect">${wordings.languagetitle}:</label>
                <select
                    name="languageselect"
                    id="languageselect"
                    class="custom-dropdown"
                    v-for="todo in todos"
                >   
                     ${lanuage(wordings.language)}
                </select>
                </form>
            </div>
            <i class="header-pancake">${pancakeIconName}</i>
            </header>`;
};
const renderContainer = () => {
  return `<container class="main-container">
            <img
            src="${wordings.businessphoto}"
            alt=" ${wordings.businessphotoalt}"
            class="business-picture"
            />
            <div class="form-wrapper">
            <h1 class="form-title">${wordings.admintitle}</h1>
            <form class="form-signin">
                <div icontype="mail" class="form-fields">
                <label class="form-label" for="maillabel">${
                  wordings.useremaillabel
                }</label>
                <input type="text" id="maillabel" name="maillabel" />
                </div>
                <div icontype="lock" class="form-fields">
                <label class="form-label" for="passowrdlabel">${
                  wordings.userpasswordlabel
                }</label>
                <input type="password" id="passowrdlabel" name="passowrdlabel" />
                </div>
                <div class="button-group">
                <div class="loggedin-wrapper">
                    <div class="form-checkbox">
                    <input checked type="checkbox" id="loggedin-checked" />
                    <label class="checkbox-support" for="loggedin-checked"></label>
                    </div>
                    <label class="loggedin-label" for="loggedin-checked"
                    >${wordings.loginSavelabel}</label
                    >
                </div>
                <button class="form-button">${wordings.submitlabel}</button>
                </div>
                <a
                href="#"
                class="form-forgot-password"
                aria-label="get reset password"
                >${wordings.forgotpasswordlabel}</a
                >
            </form>
            </div>
        </container>`;
};
const renderFooter = () => {
  return `<footer>
            <span class="footer-inner-wrapper">
            <p>${wordings.footerdescription}</p>
            <h4>${wordings.footerprivacylabel}</h4>
            <p>${wordings.footercopy}</p>
            </span>
        </footer>`;
};
const renderUI = () =>
  `${renderHeader()} ${renderContainer()} ${renderFooter()}`;

$(document).ready(() => {
  const html = renderUI();
  $("body").html(html);
});
