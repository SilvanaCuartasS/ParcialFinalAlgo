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
    changeAutor(e: any)  {
        addpr.date = e.target.value;
    }
    changeAlbum(e: any)  {
        addpr.location = e.target.value;
    }

    changeDuracion(e: any)  {
        addpr.image = e.target.value;
    }
    changeImage(e: any) {
        addpr.attendees = e.target.value;
       
    }
    
    
    submitForm()  {
        addEvento(addpr);
        alert('evento creado')
        dispatch(navigate(Screens.HOME))
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                    <input type="text" id="title" placeholder="Enter album name">
                     <input type="text" id="date" placeholder="Enter artist name">
                      <input type="number" id="location" placeholder="Enter price" >
                      <input type="number" id="attendees" placeholder="Enter stock quantity">
                       <input type="text" id="imageLink" placeholder="Enter image URL">
                    <button id="submitButton" type="submit">Add Product</button>
                </div>
            `;
            const buttonSubmit = this.shadowRoot?.querySelector("#submitButton")as HTMLButtonElement;
                buttonSubmit.addEventListener('click', this.submitForm);

                const songTitle = this.shadowRoot?.querySelector("#title") as HTMLInputElement;
                songTitle.addEventListener('change', this.changeTitle);
	
                const songArtist = this.shadowRoot?.querySelector("#date") as HTMLInputElement;
                songArtist.addEventListener('change', this.changeAutor);

                const songAlbum = this.shadowRoot?.querySelector("#location") as HTMLInputElement;
                songAlbum.addEventListener('change', this.changeAlbum);

                const songDuration = this.shadowRoot?.querySelector("#attendees") as HTMLInputElement;
                songDuration.addEventListener('change', this.changeDuracion);

                const songImage = this.shadowRoot?.querySelector("#imageLink") as HTMLInputElement;
                songImage.addEventListener('change', this.changeImage);
        }
        
    }
}

customElements.define("add-commponent", Add);
export default Add;