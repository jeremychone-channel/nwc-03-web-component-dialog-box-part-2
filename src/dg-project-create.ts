import { customElement, html, onEvent, pull, trigger } from 'dom-native';
import { DialogComponent } from './dg-dialog';


@customElement('dg-project-create')
export class ProjectCreateDialog extends DialogComponent {

	@onEvent('pointerup', '[name="ok"]')
	onOkClick(evt: PointerEvent) {
		// get the data from ui elements
		const detail: any = pull(this, 'input, textarea');

		// trigger custom component event
		trigger(this, 'PROJECT_CREATE', { detail });
	}

	init() {
		this.append(html`
			<div slot="title">Create Project</div>
			<div class="content">
				<input placeholder="name" name="name"> 
				<textarea placeholder="description" name="description"></textarea>
			</div>
			<button slot="buttons" class="do-cancel" name="cancel">CANCEL</div>
			<button slot="buttons" name="ok">CREATE</div>
		`)
	}

}