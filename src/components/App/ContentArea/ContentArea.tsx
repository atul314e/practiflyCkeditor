/**
 * @author Harish.R <harish.r@314ecorp.com>
 * @description Content Area Component, contains route mapping
 */

import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ErrorBoundary from '../ErrorBoundary';
const ClassicEditor = require('../../../../build/ckeditor.js');
/**
 * ContentArea comonent
 */
class ContentArea extends PureComponent<App.IContentAreaProps> {
	/**
	 * Component did mount
	 */
	componentDidMount = (): void => {
		const initialLoader: HTMLElement | null = document.getElementById('splash-screen');
		if (initialLoader && initialLoader.parentNode) {
			initialLoader.parentNode.removeChild(initialLoader);
		}
	};
	/**
	 * ContentArea Renderer
	 *
	 * @returns {JSX.Element} render
	 */
	render(): JSX.Element {
		return (
			<Layout.Content>
				<ErrorBoundary>
					<h2>Using CKEditor 5 build in React</h2>
					<CKEditor
						editor={ClassicEditor}
						data='<p>Hello from CKEditor 5!</p>'
						onReady={(editor: any) => {
							// You can store the "editor" and use when it is needed.
							console.log('Editor is ready to use!', editor);
						}}
						onChange={(event: any, editor: any) => {
							const data = editor.getData();
							console.log({ event, editor, data });
						}}
						onBlur={(__: any, editor: any) => {
							console.log('Blur.', editor);
						}}
						onFocus={(__: any, editor: any) => {
							console.log('Focus.', editor);
						}}
					/>
				</ErrorBoundary>
			</Layout.Content>
		);
	}
}

export default ContentArea;
