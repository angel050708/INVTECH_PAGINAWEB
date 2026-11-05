import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'InvTech: Business Central para empresas de Honduras';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Imagen para compartir en redes (Open Graph). */
export default async function ImagenCompartir() {
  const logo = await readFile(path.join(process.cwd(), 'public/logo-invtech.svg'), 'base64');
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#ffffff',
        borderTop: '16px solid #2a1499',
      }}
    >
      <img src={`data:image/svg+xml;base64,${logo}`} width={330} height={110} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 68, fontWeight: 700, color: '#16141f', lineHeight: 1.05 }}>
          Business Central para empresas de Honduras
        </div>
        <div style={{ fontSize: 30, color: '#625f70' }}>
          Implementación, facturación fiscal y soporte de Microsoft Dynamics 365
        </div>
      </div>
    </div>,
    size,
  );
}
