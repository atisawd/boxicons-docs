import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  latex: true,
  codeHighlight:true,
  search: { codeblocks: false }
  ,

})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  reactStrictMode: true,
    output: 'export',
})
