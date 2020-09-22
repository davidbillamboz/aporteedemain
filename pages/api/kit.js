import { getSingle } from '../../lib/prismicv2';

export default async (req, res) => {
  const data = await getSingle({ contentType: 'engagement_page' });

  const fileUrl = data.final_step_button_media.url;
  const filename = data.final_step_button_media_filename;

  res.setHeader('content-disposition', `attachment; filename=${filename}`);

  const response = await fetch(fileUrl);
  response.body.pipe(res);

  response.body.on('end', () => {
    res.end();
  });

  response.body.on('error', () => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 not found');
    res.end();
  });
};
