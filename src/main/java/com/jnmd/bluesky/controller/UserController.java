package com.jnmd.bluesky.controller;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Scope("prototype")
public class UserController {
	
	@RequestMapping("bbb")
	public String save2(ModelAndView mv){

		return "fabu1";
	}
	@RequestMapping("aaa")
	public ModelAndView save(ModelAndView mv){
		
		mv.setViewName("datu");
		return mv;
	}
	@RequestMapping("ccc")
	public ModelAndView save3(ModelAndView mv){
		
		mv.setViewName("shouye");
		return mv;
	}

}
