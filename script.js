const body = document.querySelector("body");
const unit = document.querySelector(".unit");

const mediaMobile = window.matchMedia('(max-width: 28em)');

const share = {
  appearAnimationSettingDesktop: "normalAppear 0.1s ease-out 1",
  appearAnimationSettingMobile: "normalAppearMobile 0.1s ease-out 1",
  currentAnimation: "none",
  inputDOM: document.querySelector(".share-icon"),
  outputDOM: document.querySelector(".share"),
  outputDOMmobile: document.querySelector(".shareOutside"),
  Appear(e){
    share.outputDOM.style.display = "flex";
    share.outputDOM.style.animation = share.currentAnimation;
    e.stopPropagation();
  },
  disappear(e){
    share.outputDOM.style.display = "none";
    e.stopPropagation();
  }
}

share.inputDOM.addEventListener("click", share.Appear);

body.addEventListener("click", share.disappear)

function handleChanges(e){
  if(e.matches){
    share.outputDOM = document.querySelector(".shareMobile");
    share.currentAnimation = share.appearAnimationSettingMobile;
  }
  else{
    share.outputDOM = document.querySelector(".share");
    share.currentAnimation = share.appearAnimationSettingDesktop;
  }
}

mediaMobile.addListener(handleChanges);
handleChanges(mediaMobile);