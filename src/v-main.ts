import { append, BaseHTMLElement, customElement, first, html, onEvent } from 'dom-native';
import { DialogComponent } from './dg-dialog';

@customElement('v-main') // same as customElements.define('v-main', IcoElement) 
class MainView extends BaseHTMLElement { // extends native HTMLElement

	#clickCount = 0; // private, transpiled by TypeScript.

	@onEvent('pointerup', '.hello-box')
	onHelloClick(evt: PointerEvent) {
		first(this, '.hello-box strong')!.textContent = `CLICKED ${++this.#clickCount}`;
	}

	init() { // called once on the first connectedCallback

		document.body.append(html`
      <dg-dialog>
				<div slot="title">Awesome Dialog</div>
				<c-ico class="big" href='#ico-thumb'></c-ico>
				<button slot="buttons" name="ok">SUBSCRIBE</div>
      </dg-dialog>
		`);

		const [createUserDialog] = append(document.body, `		
			<dg-project-create modal></dg-project-create>
		`) as [DialogComponent];

		createUserDialog.dialogEl.style.top = 'calc(50% + 5rem)';

		createUserDialog.addEventListener('PROJECT_CREATE', (evt) => {
			const { name, description } = (<CustomEvent>evt).detail;

			createUserDialog.remove();

			document.body.querySelector('.hello-box')?.remove();

			this.append(html`
				<div class="hello-box">Project Created <br>
				   <strong>${name}</strong> <br> 
					 ${description}
				</div>
			`);
		});

	}

}