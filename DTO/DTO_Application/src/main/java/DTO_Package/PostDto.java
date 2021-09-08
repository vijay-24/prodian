package DTO_Package;

import java.io.Serializable;

import lombok.Data;


	@Data
	public class PostDto implements Serializable{
		
		public PostDto() {
			
		}
		
		
		public PostDto(long id, String title, String description, String content) {
			super();
			this.id = id;
			this.title = title;
			this.description = description;
			this.content = content;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getContent() {
			return content;
		}
		public void setContent(String content) {
			this.content = content;
		}
		private long id;
		private String title;
		private String description;
		private String content;
	}