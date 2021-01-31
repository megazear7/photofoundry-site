import { html } from 'orison';

export default context => html`
  <section>
    <div>
      <a href="https://github.com/megazear7/photofoundry">Photofoundry on Github</a>
    </div>

    ${context.mdFile('./src/partials/getting-started.md')}
  </section>
`;
