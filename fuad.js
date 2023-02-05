const template = document.createElement('template');
template.innerHTML = `
    <style>
        h2 {
            color: #023e8a;
        }

        .light {
            color: #0077b6;
        }

        .lighter {
            color: #48cae4;
        }

        .lightest {
            color: #caf0f8;
        }
    </style>
    <div class="user-profile">
        <h2 id="user-name"></h2>
    </div>
`;

class UserProfile extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#user-name').innerText = this.getAttribute('name');
    }
}

window.customElements.define('user-profile', UserProfile);