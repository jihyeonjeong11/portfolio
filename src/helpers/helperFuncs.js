const scrollToEle = (e, element) => {
    e.preventDefault();
    const ele = document.getElementById(element)
    window.scrollTo({
        top: ele.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
}

export {scrollToEle};