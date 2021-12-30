import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory)

    // returns arrary of object
    //Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.
    return fileNames.map(fileName =>{
        return {
            params:{ 
                // example id is pre-render , the line below will remove .md from filename     
                id: fileName.replace(/\.md$/,'')
            }
        }
    })
}

export function getPostData(id){

    const fullPath = path.join(postsDirectory,`${id}.md`)
    const fileContents= fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    return{
        id,
        ...matterResult.data
    }
}