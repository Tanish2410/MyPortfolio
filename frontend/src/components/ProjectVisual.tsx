import type { Project } from "@/data/portfolio";

// Static illustrations describe the projects without imitating a live product.
const probabilityCells = [
  [3, 1, 0.06], [4, 1, 0.12], [5, 1, 0.08],
  [2, 2, 0.06], [3, 2, 0.15], [4, 2, 0.28], [5, 2, 0.13], [6, 2, 0.06],
  [2, 3, 0.08], [3, 3, 0.24], [4, 3, 0.48], [5, 3, 0.24], [6, 3, 0.09],
  [3, 4, 0.1], [4, 4, 0.3], [5, 4, 0.14],
  [4, 5, 0.12],
];

export default function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  return (
    <div className={`project-visual project-visual-${variant}`} aria-hidden="true">
      {variant === "vector" && (
        <svg viewBox="0 0 680 420" fill="none" className="project-artwork">
          <rect x="151" y="74" width="378" height="252" fill="#1B1C19" stroke="#48483D" />
          {probabilityCells.map(([column, row, opacity], index) => (
            <rect
              key={index}
              x={152 + column * 42}
              y={75 + row * 42}
              width="40"
              height="40"
              fill="#EAD052"
              fillOpacity={opacity}
            />
          ))}
          <g stroke="#3A3A32" strokeWidth=".8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((column) => (
              <path key={column} d={`M${151 + column * 42} 74V326`} />
            ))}
            {[1, 2, 3, 4, 5].map((row) => (
              <path key={row} d={`M151 ${74 + row * 42}H529`} />
            ))}
          </g>
          <g fill="#25261F" stroke="#757567" strokeWidth="1.2">
            <rect x="199" y="122" width="30" height="114" rx="5" />
            <rect x="409" y="80" width="72" height="30" rx="5" />
          </g>
          <g stroke="#EAD052" strokeWidth="2">
            <path d="M207 174L221 188M221 174L207 188M207 216L221 230M221 216L207 230" />
            <circle cx="340" cy="221" r="12" />
            <path d="M340 202V212M340 230V240M321 221H331M349 221H359" />
          </g>
          <g fill="#717166">
            <circle cx="256" cy="95" r="2.5" />
            <circle cx="424" cy="263" r="2.5" />
            <circle cx="172" cy="305" r="2.5" />
            <circle cx="508" cy="179" r="2.5" />
          </g>
          <path d="M137 90V60H167M513 60H543V90M137 310V340H167M513 340H543V310" stroke="#EAD052" strokeOpacity=".5" />
        </svg>
      )}
      {variant === "trace" && (
        <svg viewBox="0 0 580 330" fill="none" className="project-artwork">
          <rect x="104" y="42" width="372" height="246" rx="3" fill="#20201B" stroke="#414037" />
          <path d="M128 64H142M135 57V71M438 64H452M445 57V71M128 266H142M135 259V273M438 266H452M445 259V273" stroke="#686456" />
          <path d="M172 214C209 203 188 141 223 133C255 126 264 221 290 214C318 206 283 89 329 109C369 126 325 221 371 207C386 202 393 182 411 182" stroke="#EAD052" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M177 239C232 246 315 229 365 236" stroke="#EAD052" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" />
          <path d="M388 104L406 86L418 98L400 116L385 120L388 104Z" fill="#302F24" stroke="#A69D64" strokeWidth="1.5" />
          <path d="M388 104L400 116M402 90L414 102" stroke="#EAD052" strokeWidth="1.5" />
        </svg>
      )}
      {variant === "margin" && (
        <svg viewBox="0 0 580 330" fill="none" className="project-artwork">
          <rect x="94" y="53" width="392" height="229" rx="4" fill="#1C1D19" stroke="#4A483B" />
          <path d="M94 88H486" stroke="#3C3B32" />
          <g fill="#686658">
            <circle cx="114" cy="71" r="3" />
            <circle cx="126" cy="71" r="3" />
            <circle cx="138" cy="71" r="3" />
          </g>
          <path d="M121 120L130 128L121 136" stroke="#A29E87" strokeWidth="2" />
          <text x="151" y="137" fill="#AAA691" fontSize="24" fontFamily="monospace">1010 + 0011</text>
          <text x="148" y="219" fill="#EAD052" fontSize="60" letterSpacing="5" fontFamily="monospace">1101</text>
          <path d="M316 185V222" stroke="#EAD052" strokeWidth="3" />
          <path d="M148 246H304" stroke="#484638" />
        </svg>
      )}
    </div>
  );
}
