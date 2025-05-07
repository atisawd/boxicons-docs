import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  latex: true,
  codeHighlight:true,
  search: { codeblocks: false },
  output: 'export',
  basePath: "/boxicons-docs"
})
export default withNextra({
  reactStrictMode: true
})