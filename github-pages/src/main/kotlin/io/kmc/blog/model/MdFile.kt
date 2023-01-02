package io.kmc.blog.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.io.File

@Entity
data class MdFile(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id : Long,
        var title : String = "",
        var filePath : String = ""
) {

    var md5 : String = ""

    @Transient
    var file : File? = null
        get() {
            if (filePath.isEmpty()) {
                return null
            }
            return File(filePath)
        }
}