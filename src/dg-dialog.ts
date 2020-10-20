import { activateDrag } from '@dom-native/draggable';
import { adoptStyleSheets, BaseHTMLElement, css, customElement, html, onEvent } from 'dom-native';

const _shadowCss = css`
	:host{
		position: absolute;
		top: 0; right: 0; bottom: 0; left: 0;
	}

	.dialog{
		position: absolute;
		top: 10rem; 
		left: calc(50% - 11rem);
		width: 22rem;
		
		background: #fff;
		box-shadow: var(--elev-5);

		display: grid;
		grid-template-rows: 4rem auto 4rem;		
	}


	header{
		display: grid;
		grid-template-columns: 1fr 2rem;
		align-items: center;
		padding-left: 1rem;
		border-bottom: solid 1px var(--clr-border);
		user-select: none;
		cursor: pointer;		
	}	

	section {
		padding: 1rem; 
		min-height: 4rem;
		max-height: 20rem;
		overflow: auto;
	}	

	footer{
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		padding: 0 1rem;
		border-top: solid 1px var(--clr-border);
	}

	.message{
		font-size: .75rem;
	}
	
	.buttons{
		display: grid;
		grid-auto-flow: column;
		grid-gap: .5rem;
	}			
`

@customElement('dg-dialog') // same as customElements.define('dg-dialog', DialogComponent)
export class DialogComponent extends BaseHTMLElement { // extends HTMLElement

	get dialogEl() { return this.shadowRoot!.firstElementChild as HTMLElement }

	@onEvent('pointerdown', 'header, [slot="title"]')
	onHeaderForDrag(evt: PointerEvent) {
		activateDrag(this.dialogEl, evt);
	}

	constructor() {
		super();

		this.attachShadow({ mode: 'open' }).append(html`
			<div class="dialog" part="dialog">
				<header>
					<span class="title"><slot name= "title"></slot></span>
					<c-ico href="#ico-close"></c-ico>
				</header>
				<section>
					<slot></slot>
				</section>	
				<footer>
					<span class="message"><slot name="message"></slot></span>
					<span class="buttons"><slot name="buttons"></slot></span>
				</footer>							
			</div> 
		`);

		adoptStyleSheets(this, _shadowCss);
	}

}