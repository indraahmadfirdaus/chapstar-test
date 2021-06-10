import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
const Docs = ({ data }) => {
    let editor = null
    return (
        <div>
            <h2>Chapstar Application Data</h2>
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                        editor = editor;
                    } }
                    onError={ ( { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data={
                        `<table>
                        <thead >
                        <tr>
                        <th>Nama Aplikasi</th>
                        <th>Keterangan</th>
                        <th isNumeric>Jumlah Pengguna</th>
                        <th >Pendiri</th>
                        <th >Tanggal Didirikan</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(eachData => (
                            `<tr>
                                <td>${eachData.nama_aplikasi}</td>
                                <td>${eachData.keterangan}</td>
                                <td>${eachData.jumlah_pengguna}</td>
                                <td>${eachData.pendiri}</td>
                                <td>${eachData.tanggal_didirikan}</td>
                            </tr>`
                        ))}
                    </tbody>
                        </table>`
                    }
                    config={  {
                        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                        heading: {
                            options: [
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                            ]
                        }
                    } }
                />
        </div>
    )
}

export default Docs
