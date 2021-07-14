                                $(function () {
                                    "use strict";
                                    
                                    $(".foto img").click(function () {
                                        var $src = $(this).attr("src");
                                        $(".show").fadeIn();
                                        $(".img-show img").attr("src", $src);
                                    });
                                    
                                    $("span, .overlay").click(function () {
                                        $(".show").fadeOut();
                                    });
                                    
                                });
