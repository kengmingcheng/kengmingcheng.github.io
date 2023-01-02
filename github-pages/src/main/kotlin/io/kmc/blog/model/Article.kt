package io.kmc.blog.model

import jakarta.persistence.*

@Entity
data class Article(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id : Long,
        var title : String = "",
        @ManyToOne
        var author: User? = null,
        @OneToOne
        var file : MdFile? = null,
        var description: String = "",
        var thumbnail: String = ""
) {

}