import React, { Component } from 'react';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';
class App extends Component {

  render() {

    const config = {
      videoUploadMethod: 'POST',
      videoUploadURL: 'https://api.cloudinary.com/v1_1/{usernmae}/video/upload',
      videoUploadParams: {
        'api_key': 'apikeyhere', // cloudinary api key
        'public_id': 'videoname', // name of image
        'upload_preset': 'yscyvoa8' // size dimensions of image etc - create preset in cloudinary
      },
      // imageUploadURL: 'https://api.cloudinary.com/v1_1/{usernmae}/image/upload',
      // imageUploadParams: {
      //   'api_key': 'apikeyhere', // api key
      //   'public_id': 'imagename', // name of image
      //   'upload_preset': 'yscyvoa8' // size dimensions of image etc
      // },
      // imageUploadMethod: 'POST',
      // callback: "http://localhost/cloudinary/html/cloudinary_cors.html",
      events: {
        'froalaEditor.video.error': (e, editor, code) => {
          console.log(e);
          console.log(editor);
          console.log(code);
        },
        'froalaEditor.video.linkError': (e, editor, link) => {
          console.log(e);
        },
        // 'froalaEditor.image.uploaded': (e, editor, response) => {
        //     console.log(e);
        //     console.log('uploaded');
        //     console.log(editor);
        //     response = JSON.parse(response);
        //     editor.image.insert(response.secure_url, true, null, editor.image.get(), null);
        //     return false;
        // },
        'froalaEditor.video.uploaded': (e, editor, response) => {
          console.log(response);
            response = JSON.parse(response);
            console.log(response);
            // let video = { link: response.secure_url };
            // editor.video.insertHtmlVideo(response);
            editor.video.insertFromUrl(JSON.stringify(response));
        },
        // 'froalaEditor.image.loaded': (e, editor, $img) => {
        //   console.log('2. loaded');
        //   console.log(e);
        //   console.log($img);
        //   // response = JSON.parse(response);
        //   // editor.image.insert(response.secure_url, true, null, editor.image.get(), null)
        //   // return false
        // },
        // 'froalaEditor.image.inserted': (e, editor, $img, response) => {
        //   console.log('1. inserted');
        //   console.log(e);
        //   console.log($img);
        //     // response = JSON.parse(response);
        //     // editor.image.insert(response.secure_url, true, null, editor.image.get(), null)
        //     // return false
        // },
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <FroalaEditor config={config} tag='textarea'/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
