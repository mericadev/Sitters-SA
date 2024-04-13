const headerTemplate = document.createElement('template'); 

headerTemplate.innerHTML = `

        <style>
        header {
          position: sticky;
          top: 0; /* Stick to the top of the viewport */
          z-index: 1000; /* Ensure it's on top of other elements */
          top: 3%;
          padding: 1rem;
          
        }

        .side-bar {
          display: none;
          position: fixed;
          top: 2%;
          right: 0;
          height: 100vh;
          width: 400px;
          z-index: 999;
          background-color: hsla(0, 0%, 100%, 0);
          box-shadow: -10px 0 10px hsla(0, 0%, 0%, 0.2);
          backdrop-filter: blur(10px);
          li {
              width: 100%;
          }
          .dropdown-menu {
            display: flex;
            flex-direction: column;
          }
          .menu-close a svg:hover{
              background-color: var(--deep-blue); 
              border-radius: 50%;   
          }
      }

      .side-bar .dropdown-menu li a {
        color: var(--primary-chef-blue);
        font-family: "PT Sans", sans-serif;
        &:hover {
          color: var(--deep-blue); 
          margin-bottom: .8rem;
          transition: .1s ease-in;
        }
      }
      
        .nav-bar {
            --_animationStartsAfter: 50px;
            --animationDistance: 5px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-radius: 10px;
            min-height: 10vh;
            margin-bottom: 4rem;
            background-color: var( --background-azure);
            animation: stickyNav linear forwards;
            animation-timeline: view();
            animation-range-start: calc(10vh + var( --_animationStartsAfter));

            animation-range-end: calc(5vh + var( --_animationDistance));

            ul {
              display: flex;
              justify-content: space-around;
              align-items: center;
              position: relative;
              margin: 0;
              padding: 0;
              li {
                list-style: none;
                a{
                  font-family: "PT Sans", sans-serif;
                  text-decoration: none;
                  margin-right: 1.5rem;
                  font-weight: 700;
                  font-size: 1.2em;
                    }
              }
            }
            .dropdown-menu {
              li a {
                display: flex;
                justify-content: right;
                margin-top: 2rem;
              }
            }
            .nav-items button{
              display: none;
            }
          }
          .top-items .menu-open{
            display: none;
          }

          .nav-items {
            ul li a {
              color: var(--deep-blue);
              text-transform: uppercase;
            }
          }
          ul.flex-group.top-items li:not(:first-child):nth-last-child(-n+4) a:hover {
            color: var(--tertiary-sky-blue);
            margin-bottom: .8rem;
            border-bottom: 3px solid var(--tertiary-sky-blue);
            border-radius: 2px;
            transition: .1s ease-in;
        }
        




          @keyframes stickyNav {
            100% {
              background-color: hsla(0, 0%, 100%, 0);
              box-shadow: 0 0 0.75rem hsla(0, 0%, 0%, 0.3);
            }
          }

          @media (max-width: 575px) {
            .top-items .menu-open {
              display: block; 
          }
          .top-items li {
            display: none;
          }
         }
          
        </style>
        
        <header>
        <navbar>
        <nav class="nav-bar flex-group">
            <div class="logo">
              <a href="index.html"><img src="../images/sitters-sa-logo.svg" width="40px" height="40px"></a>
            </div>

            <div class="side-bar">
            <ul class="dropdown-menu">
            <li class="menu-close">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </a>
            </li>
            <li><a href="index.html">Home</a></li>
            <li><a href="owner-contact-page.html">For owners</a></li>
            <li><a href="sitter-contact-page.html">For Sitters</a></li>
            <li><a href="contact-us-page.html">Contact</a></li>
            </ul>
            </div>

            <div class="nav-items">
                <ul class="flex-group top-items">
                    <li class="menu-open">
                    <a href="#"><svg  xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
                    </li>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="owner-contact-page.html">For owners</a></li>
                    <li><a href="sitter-contact-page.html">For Sitters</a></li>
                    <li><a href="contact-us-page.html">Contact</a></li>
                </ul>
                
            </div>
                </nav>
        </navbar>
        </header>
        `;

        class Header extends HTMLElement {
            constructor() {
              super();
            }
          
            connectedCallback() {
              const shadowRoot = this.attachShadow({ mode: 'open' });

              shadowRoot.appendChild(headerTemplate.content);

              const sideBar = shadowRoot.querySelector('.side-bar');

              const menuOpen = shadowRoot.querySelector('.menu-open');
              menuOpen.addEventListener('click', () =>{
                console.log('test');
                sideBar.style.display = 'block';
              })

              const menuClose = shadowRoot.querySelector('.menu-close');
              menuClose.addEventListener('click', ()=>{
                sideBar.style.display = 'none';
              })

              }
            }
          


customElements.define('header-component', Header);