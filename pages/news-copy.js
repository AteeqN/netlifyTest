function NewsDev(props) {
    console.warn("data", props)
    return (
        <h1> Hello News copy</h1>
    )
}
export async function getStaticProps() {
    const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3jxlrOePjuldv4KmuADG7CAb9VY222bX`)
    const data = await res.json()
    console.warn(data)
    return {
      props :{
          data,
      }
    }
}

export default NewsDev