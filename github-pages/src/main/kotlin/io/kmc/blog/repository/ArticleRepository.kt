package io.kmc.blog.repository

import io.kmc.blog.model.Article
import org.springframework.stereotype.Repository

@Repository
interface ArticleRepository : BaseRepository<Article, Long> {

//    fun findByTitle(title: String): Article?


}