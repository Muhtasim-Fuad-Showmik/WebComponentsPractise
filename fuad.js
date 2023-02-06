const template = document.createElement('template');
template.innerHTML = `
    <style>
        h2 {
            color: #023e8a;
            font-weight: 700;
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

        #profile-picture {
            width: 200px;
            border-radius: 50%;
            border: 8px solid white;
            margin-top: 10px;
        }

        #text-details {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
        }

        .btn-primary {
            min-width: 120px;
            cursor: pointer;
            background-color: #0077b6;
            outline: none;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            margin-top: 10px;
        }

        .user-info {
        }

        .user-profile {
            background-color: #e3f8fc;
            width: 700px;
            min-height: 300px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            padding: 30px;
            vertical-align: middle;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    </style>
    <div class="user-profile">
        <img id="profile-picture" >
        <div id="text-details">
            <h2 id="user-name"></h2>
            <div class="user-info">
                <p>EMAIL</p>
                <p>PHONE</p>
            </div>
            <button id="toggle-details" class="btn-primary" type="button">Less</button>
        </div>
    </div>
`;

class UserProfile extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#user-name').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('#profile-picture').src = this.getAttribute('image');
    }
}

window.customElements.define('user-profile', UserProfile);