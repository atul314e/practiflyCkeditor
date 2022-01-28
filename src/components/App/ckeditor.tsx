import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
const ClassicEditor = require('../../build/ckeditor.js');

const Ckeditor: React.FC = ()=>{
  const [html, setHtml] = useState('');
  return (
		<div className='ckeditor-container'>
			<CKEditor
				editor={ClassicEditor}
				data='<p>Hello from CKEditor 5!</p>'
				onReady={(editor: any) => {
					// You can store the "editor" and use when it is needed.
					console.log('Editor is ready to use!', editor);
				}}
				onChange={(event: any, editor: any) => {
					const data = editor.getData();
					setHtml(data);
					console.log({ event, editor, data });
				}}
				onBlur={(__: any, editor: any) => {
					console.log('Blur.', editor);
				}}
				onFocus={(__: any, editor: any) => {
					console.log('Focus.', editor);
				}}
			/>
			<div>{html}</div>
		</div>
  );
}

export default Ckeditor;
