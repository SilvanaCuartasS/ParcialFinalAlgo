import { dispatch } from '../store';
import { navigate } from '../store/action';
import { Screens } from '../types/store';
import { addEvento } from '../utils/firebase';

const addpr = {
    title: '',
	date: '',
	location: '',
    image: '',
	attendees: '',
}

class Add extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    changeTitle(e: any)  {
        addpr.title = e.target.value;
    }
    changeDate(e: any)  {
        addpr.date = e.target.value;
    }
    changeLocation(e: any)  {
        addpr.location = e.target.value;
    }

    changeAtendees(e: any)  {
        addpr.attendees = e.target.value;
    }
    changeImage(e: any) {
        addpr.image = e.target.value;
       
    }
    
    submitForm()  {
        addEvento(addpr);
        alert('Evento creado')
        // dispatch(navigate(Screens.ADMIN))
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                    <input type="text" id="title" placeholder="Enter title">
                     <input type="text" id="date" placeholder="Enter date">
                      <input type="text" id="location" placeholder="Enter location" >
                       <input type="text" id="imageLink" placeholder="Enter image URL">
                       <input type="text" id="at" placeholder="Enter attendees">
                    <button id="submitButton" type="submit">Add Product</button>
                </div>
            `;
            const buttonSubmit = this.shadowRoot?.querySelector("#submitButton")as HTMLButtonElement;
                buttonSubmit.addEventListener('click', this.submitForm);

                const title = this.shadowRoot?.querySelector("#title") as HTMLInputElement;
                title.addEventListener('change', this.changeTitle);
	
                const loc = this.shadowRoot?.querySelector("#location") as HTMLInputElement;
                loc.addEventListener('change', this.changeLocation);

                const date = this.shadowRoot?.querySelector("#date") as HTMLInputElement;
                date.addEventListener('change', this.changeDate);

                const at = this.shadowRoot?.querySelector("#at") as HTMLInputElement;
                at.addEventListener('change', this.changeAtendees);

                const image = this.shadowRoot?.querySelector("#imageLink") as HTMLInputElement;
                image.addEventListener('change', this.changeImage);
        }
        
    }
}

customElements.define("event-form", Add);
export default Add;