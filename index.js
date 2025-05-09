// 1.nav 图标
const navIcon = document.querySelector('.nav-icon');
const navLink = document.querySelector('.nav-link');
const header = document.querySelector('header')
const icon1 = "https://cdn.prod.website-files.com/66f2eb7004c16a3a0f5fbdc0/66f2eb7004c16a3a0f5fbdf8_Hamburger%20menu.svg";
const icon2 = "https://cdn.prod.website-files.com/66f2eb7004c16a3a0f5fbdc0/66f2eb7004c16a3a0f5fbe42_Close.svg"; // 替换为另一个图标地址
let isIcon = true; // 用于判断当前图标状态
navIcon.addEventListener('click', function() {
  navLink.style.visibility = (navLink.style.visibility === 'hidden') ? 'visible' : 'hidden'; 
  isIcon = !isIcon;
  navIcon.src = isIcon ? icon1 : icon2;
  header.style.display = (header.style.display === 'none') ? 'block' : 'none'
})

// 2.轮播图
let images = document.querySelectorAll('.parkImg'); // 获取所有图片
// 监听滚动事件
window.addEventListener('scroll', function() {
  const section = document.querySelector('.National-park');
  const sectionTop = section.getBoundingClientRect().top;

  // 计算滚动的比例
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

  // 计算滚动进度百分比
  const threshold1 = 0.3;  // 30%滚动进度时显示第一张图片
  const threshold2 = 0.6;  // 60%滚动进度时显示第二张图片
  const threshold3 = 1;    // 100%滚动进度时显示第三张图片

  // 控制图片遮盖效果
  if (scrollProgress >= 0 && scrollProgress <= threshold1) {
    // 第一张始终完全显示，第二张和第三张从下往上逐渐遮盖
    images[0].style.clipPath = 'inset(0% 0 0% 0)'; // 第一张完全显示
    images[1].style.clipPath = `inset(${100 - (scrollProgress / threshold1) * 100}% 0 0 0)`; // 第二张逐渐显示
    images[2].style.clipPath = 'inset(100% 0 0 0)'; // 第三张保持不显示
  } else if (scrollProgress > threshold1 && scrollProgress <= threshold2) {
    images[0].style.clipPath = 'inset(0% 0 0% 0)'; // 第一张完全显示
    images[1].style.clipPath = 'inset(0% 0 0% 0)'; // 第二张完全显示
    images[2].style.clipPath = `inset(${100 - ((scrollProgress - threshold1) / (threshold2 - threshold1)) * 100}% 0 0 0)`; // 第三张逐渐显示
  } else if (scrollProgress > threshold2 && scrollProgress <= threshold3) {
    images[0].style.clipPath = 'inset(0% 0 0% 0)'; // 第一张完全显示
    images[1].style.clipPath = 'inset(0% 0 0% 0)'; // 第二张完全显示
    images[2].style.clipPath = 'inset(0% 0 0% 0)'; // 第三张完全显示
  }
});


// 3.perfect-stay
const perfectBtn = document.querySelectorAll('.perfect-btn')
const arrowRight = document.querySelector('.arrow-right')



perfectBtn.forEach(button => {
const arrowRight = button.querySelector('.arrow-right')

button.addEventListener('mouseenter', function() {
    arrowRight.src = 'https://cdn.prod.website-files.com/66f2eb7004c16a3a0f5fbdc0/66f2eb7004c16a3a0f5fbe56_arrow_right_alt_24dp_5F6368_FILL0_wght200_GRAD0_opsz24%202%20(4).svg'
  })
  button.addEventListener('mouseleave', function() {
    arrowRight.src = 'https://cdn.prod.website-files.com/66f2eb7004c16a3a0f5fbdc0/66f2eb7004c16a3a0f5fbdf5_arrow_right_alt_24dp_5F6368_FILL0_wght200_GRAD0_opsz24%202.svg'
  })
})





