# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'TurboPi Advanced'
copyright = '2025, Hiwonder'
author = 'Hiwonder'
release = 'v2.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx_markdown_tables','myst_parser','sphinx_copybutton','sphinx_multiversion']

smv_branch_whitelist = r'^.*$'
smv_released_pattern = r'^branch/.*$'
smv_outputdir_format = '{ref.name}'
smv_prefer_remote_refs = False
smv_versionname_fallback = 'Advanced'
smv_versiondict = {
    'main': 'Advanced',
    'latest': 'Advanced',
    'standard': 'Standard',
}

templates_path = ['_templates']
exclude_patterns = []

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = "sphinx"  # 或者其他主题，如 'friendly', 'monokai'
html_codeblock_linenos_style = 'table'  # 推荐的样式

myst_enable_extensions = [
    "attrs_block",
    "colon_fence",
    "substitution",
    "dollarmath",
]
html_context = {
    'display_latest': True,
    'latest_version_name': 'Advanced',
}
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
html_css_files = ['style.css']
html_js_files = ['custom.js']
html_theme_options = {
    'version_selector': True,
    'versioning': True,
    'current_version_name': 'Advanced',
    'style_nav_header_background': '#f98800',
}