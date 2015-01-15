//Menu Bar Logos
var summary_logo;
var education_logo;
var technical_logo;
var work_logo;
var awards_logo;

//Sections
var summary_section;
var education_section;
var technical_section;
var work_section;
var awards_section;
var personal_section;
var all_sections;

var initialize = function(){
	var resume_sections = document.getElementsByClassName("resume-section");
	summary_section = resume_sections[0];
	education_section = resume_sections[1];
	technical_section = resume_sections[2];
	work_section = resume_sections[3];
	awards_section = resume_sections[4];
	personal_section = resume_sections[5];
	all_sections = [summary_section, education_section, technical_section, 
						work_section, awards_section, personal_section];
	
	var logos = document.getElementsByClassName("selection-icon");
	for(var i = 0, ii = logos.length; i < ii; i++){
		logos[i].addEventListener("click", displaySection);
	}
	education_logo = logos[0];
	technical_logo = logos[1];
	work_logo = logos[2];
	awards_logo = logos[3];
};

//displaySection
var displaySection = function(){
	var src = this.getAttribute("src");
	var section_string = src.substring(7, src.length - 4) + "_section";
	var section = window[section_string];
	for(var i = 0, ii = all_sections.length; i < ii; i++){
		if(all_sections[i] != section){
			all_sections[i].style.display = "none";
		}else{
			all_sections[i].style.display = "inline-block";
		}
	}
};

document.getElementsByClassName("resume-section")[0].style.display = "inline-block";
document.body.onload = initialize;


