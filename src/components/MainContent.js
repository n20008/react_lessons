import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent (props) {
  return (
    <main>
      <div>
        <form onSubmit={props.HandleSearch}>
          <input
            type='search'
            placeholder='タイトルを入力'
            required
            value={props.search}
            onChange={e => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div>
        {props.animeList.map(anime => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  )
}

export default MainContent
