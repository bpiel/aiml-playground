(defproject flojure-tens "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  
  :url "http://example.com/FIXME"
  
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :source-paths ["src/clj"]
  
  :java-source-paths ["src/java"]

  :plugins [[lein-cljsbuild "1.1.5"]]
   
  :dependencies [[org.clojure/clojure "1.9.0-alpha16"]
                 [org.clojars.ghaskins/protobuf "3.3.1-1"]

                 ;; web app
                 [org.clojure/clojurescript "1.9.908"]
                 [aleph "0.4.3"]
                 [ring/ring-core "1.5.1"] ;; fixes something???
                 [javax.servlet/servlet-api "2.5"] ;; necessary for some reason
                 [compojure "1.6.0"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.1"]
                 [re-com "0.9.0"]
                 [re-frisk "0.4.5"]
                 [com.taoensso/timbre "4.8.0"]
                 [cljsjs/d3 "4.3.0-5"]
                 #_[cljsjs/c3 "0.4.14-0" :exclusions [cljsjs/d3]]

                 ;; examples
                 [net.mikera/imagez "0.12.0"]]

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.4"]
                   [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                   [figwheel-sidecar "0.5.13"]]
    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
    :plugins      [[lein-figwheel "0.5.13"]]
    :prep-tasks [["cljsbuild" "once" "main"] "javac" "compile"]}}

  :cljsbuild
  {:builds
   {:main {:source-paths ["src/cljs"]
                                        ;           :figwheel     {:on-jsload "dagre-test.core/mount-root"}
           :compiler     {:main                 guildsman.core
                          :output-to            "resources/public/js/compiled/app.js"
                          :output-dir           "resources/public/js/compiled/out"
                          :asset-path           "js/compiled/out"
                          :source-map-timestamp true
                          :preloads             [devtools.preload]
                          :external-config      {:devtools/config {:features-to-install :all}}}}}}

  
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]})
