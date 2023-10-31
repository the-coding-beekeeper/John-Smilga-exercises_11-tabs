function showTab(tab) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('visible');
    tab.classList.add('hidden');
  })
  const selectedTab = document.querySelector("." + tab);
  selectedTab.classList.remove('hidden');
  selectedTab.classList.add('visible');

  const buttons = document.querySelectorAll('.btn');
  console.log(buttons);
  buttons.forEach(button => {
    button.classList.remove('active');
  })
  const selectedButton = document.querySelector(".btn-" + tab);
  selectedButton.classList.add('active');

}