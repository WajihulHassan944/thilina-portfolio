function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}




document.addEventListener('DOMContentLoaded', () => {
    class Cursor {
      constructor(options) {
        this.targets = options.targets || [];
        this.cursorElement = document.querySelector('[data-cursor]');
        this.init();
      }
  
     init() {
    this.targets.forEach(target => {
      const elements = document.querySelectorAll(target);
      elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          this.cursorElement.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', () => {
          this.cursorElement.classList.remove('cursor-hover');
        });
      });
    });
  
    document.addEventListener('mousemove', (event) => {
      this.moveCursor(event);
    });
  }
  
      moveCursor(event) {
        const x = event.clientX;
        const y = event.clientY;
  
        this.cursorElement.style.left = `${x}px`;
        this.cursorElement.style.top = `${y}px`;
      }
    }
  
    new Cursor({
      targets: ['a']
    });
  });
  
  