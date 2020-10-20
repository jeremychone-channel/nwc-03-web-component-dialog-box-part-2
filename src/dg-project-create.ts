import { customElement, html } from 'dom-native';
import { DialogComponent } from './dg-dialog';


@customElement('dg-project-create')
export class ProjectCreateDialog extends DialogComponent {

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