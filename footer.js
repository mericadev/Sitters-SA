const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
 <style>
 footer {
    min-height: 20vh;
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    background-color: #E4F9FF;
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        align-items: center;
        li {
          list-style: none;
          a{
            font-family: "PT Sans", sans-serif;
            text-decoration: none;
            margin-right: 2rem;
            color: rgb(21, 72, 129);
            font-weight: 600;
            &:hover {
                color: #6C63FF;
                transition: .2s;
            }
              }
        }
      }
      .info .number {
        text-decoration: underline;
      }
      .copy-right{
        font-size: .8em;
      }
      p {
        font-size: 1.2em;
        font-weight: 500;
        line-height: 1.2em;
        }
        .logo, .copy-right{
          padding: 2rem;
        }
  }
 </style>

 <footer>
        <div class="logo">
        <a href="index.html"><img src="images/sitters-sa-logo.svg" width="40px" height="40px"></a>
        </div>
        <div class="info">
            <ul class="flex-group">
                <li><a href="#">info@sitterssa.co.za</a></li>
                <li class="number"><a href="#">0716031181</a></li>
                <li><a href="#">327 Theuns van Niekerk Street Wierdapark, Centurion</a></li>
            </ul>
        </div>
        <div class="copy-right">
            <p>2024 Sitters SA. All rights reserved.</p>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);