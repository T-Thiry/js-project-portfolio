/* const Card = () => {
  return ( 
    <article>
      <h2>Heading</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</p>
    </article>
  )
  }
*/

/* You can either write it like this (Example 1) or....
const Card = (props) => {
return ( 
  <article>
    <h2>{props.title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</p>
  </article>
)
}
*/

// or like this (Example 2). This is more cleaner since where defining the props (title)
export const TechCard = ({ title, text }) => {
  return ( 
    <article>
       <h2>{title}</h2>
       <p>{text}</p>
    </article>
  )
}

export const ProjectCard = ({ title, text }) => {
  return ( 
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export const SkillsCard = ({ title }) => {
  return ( 
    <article>
       <h2>{title}</h2>
    </article>
  )
}

export const ArticleCard = ({ title, text }) => {
  return ( 
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
