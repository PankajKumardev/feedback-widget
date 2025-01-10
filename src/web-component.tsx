import ReactDOM from 'react-dom/client';
import FeedbackWidget from './components/FeedbackWidget';

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
    this.shadowRoot?.appendChild(root);
    ReactDOM.createRoot(root).render(
      <FeedbackWidget
        projectId={this.projectId}
        websiteName={this.websiteName}
      />
    );
  }
}

customElements.define('feedback-widget', FeedbackWebComponent);
