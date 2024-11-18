import { XmlDocument } from 'libxml2-wasm';

onmessage = () => {
  console.log('Step 3. starting worker');

  // comment out these lines and the worker behaves normally
  const doc = XmlDocument.fromString('<note><to>Tove</to></note>');
  console.log(doc);
  doc.dispose();

  postMessage({ success: 1 });
};
