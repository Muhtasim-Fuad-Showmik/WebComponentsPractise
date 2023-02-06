const template = document.createElement("template");
template.innerHTML = `
    <style>
        h2 {
            color: #caf0f8;
            font-weight: 700;
            font-size: 48px;
            word-break: keep-all;
            width: 50%;
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
            width: 400px;
            height: 400px;
            object-fit: cover;
            object-position: center;
        }

        #text-details {
            padding: 30px 20px;
            color: white;
        }

        #toggle-details {
            width: 50%;
        }

        .user-info {
        }

        .user-profile {
            background-color: black;
            width: 800px;
            height: 400px;
            display: flex;
            justify-content: start;
            margin-bottom: 20px;
            border-radius: 8px;
            vertical-align: middle;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            overflow: hidden;
        }
    </style>
    <div class="user-profile">
        <img id="profile-picture" >
        <div id="text-details">
            <h2 id="user-name"></h2>
            <div class="user-info">
                <p><slot name="email"/></p>
                <p><slot name="phone"/></p>
            </div>
            <button id="toggle-details" class="btn-primary" type="button">Less Details</button>
        </div>
    </div>
`;

class UserProfile extends HTMLElement {
    constructor() {
        super();

        this.expanded = true;

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("#user-name").innerText =
            this.getAttribute("name");
        this.shadowRoot.querySelector("#profile-picture").src =
            this.getAttribute("image");
    }

    toggleDetails(){
        this.expanded = !this.expanded;

        const details = this.shadowRoot.querySelector('.user-info');
        const detailButton = this.shadowRoot.querySelector('#toggle-details');

        if(this.expanded) {
            details.style.display = 'block';
            detailButton.innerText = 'Less Details';
        } else {
            details.style.display = 'none';
            detailButton.innerText = 'More Details';
        }
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector("#toggle-details")
            .addEventListener("click", () => this.toggleDetails());
    }

    disconnectedCallback() {
        this.shadowRoot
            .querySelector("#toggle-details")
            .removeEventListener();
    }
}

window.customElements.define("user-profile", UserProfile);
