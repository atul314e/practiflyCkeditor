/**
 * @author Harish.R <harish.r@314ecorp.com>
 * @description Content Area Component, contains route mapping
 */

import React, { PureComponent} from 'react';
import { Layout } from 'antd';
import ErrorBoundary from '../ErrorBoundary';
import Ckeditor from '../ckeditor';
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
  html=''
  ckeditorHtml = (data:any):any => {
    this.html=data;
    console.log(this.html);
  }
	render(): JSX.Element {
		return (
			<Layout.Content>
				<ErrorBoundary>
					<h2>Using CKEditor 5 build in React</h2>
          <Ckeditor/>
				</ErrorBoundary>
			</Layout.Content>
		);
	}
}

export default ContentArea;
