function App() {
  return (
    <div className="app" data-id="jlm52rcw0" data-path="app.js">
      <Header data-id="ig1p077uk" data-path="app.js" />
      <div className="main-content" data-id="w9clrhtij" data-path="app.js">
        <BalanceSection data-id="5j5kk7306" data-path="app.js" />
        <Banner data-id="5buet0mxy" data-path="app.js" />
        <FeatureGrid data-id="1y4o4eydp" data-path="app.js" />
        <Announcement data-id="q924xn9gr" data-path="app.js" />
      </div>
      <Footer data-id="ynpe21xb9" data-path="app.js" />
      <Chatbot data-id="folfwvc54" data-path="app.js" />
    </div>);

}

// Error boundary handling
function reportError(error, info) {
  console.error("Error caught by error boundary:", error, info);
  // In a production app, you would log this to a service
}

// Render the application
ReactDOM.render(
  <React.StrictMode data-id="7exk48le5" data-path="app.js">
    <App data-id="nm3tezgfz" data-path="app.js" />
  </React.StrictMode>,
  document.getElementById('root')
);