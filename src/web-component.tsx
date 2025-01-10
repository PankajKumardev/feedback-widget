import ReactDOM from 'react-dom/client';
import FeedbackWidget from './components/FeedbackWidget';
import './index.css'; // Import TailwindCSS here

class FeedbackWebComponent extends HTMLElement {
  projectId: number;
  websiteName: string;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.projectId = Number(this.getAttribute('projectId'));
    this.websiteName = this.getAttribute('websiteName') || '';
  }

  connectedCallback() {
    const root = document.createElement('div');

    // Create a style element to hold the Tailwind CSS
    const style = document.createElement('style');
    
    // Insert TailwindCSS into the style element
    style.textContent = `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    `;
    
    // Append styles and root div to shadow DOM
    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(root);

    // Render the React component inside the shadow DOM
    ReactDOM.createRoot(root).render(
      <FeedbackWidget
        projectId={this.projectId}
        websiteName={this.websiteName}
      />
    );
  }
}

// Register the custom element
customElements.define('feedback-widget', FeedbackWebComponent);
