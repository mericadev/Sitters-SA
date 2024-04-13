const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
 <style>
 footer {
    min-height: 20vh;
    padding: 2rem;
    background-color: #E4F9FF;
    ul {
        display: flex;
        justify-content: center;
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
  }
 </style>

 <footer>
        <div class="logo">
        <a href="index.html"><img src="../images/sitters-sa-logo.svg" width="40px" height="40px"></a>
        </div>
        <div class="info">
            <ul class="flex-group">
                <li><a href="#">info@Island.com</a></li>
                <li class="number"><a href="#">+123456789</a></li>
                <li><a href="#">Seesreasse 21, Zurich</a></li>
            </ul>
        </div>
        <div class="copy-right">
            <p>2023 Island. All rights reserved.</p>
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