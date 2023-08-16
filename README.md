# LIDA: Automatic Generation of Visualizations and Infographics using Large Language Models

[![PyPI version](https://badge.fury.io/py/lida.svg)](https://badge.fury.io/py/lida)
[![arXiv](https://img.shields.io/badge/arXiv-2303.02927-<COLOR>.svg)](https://arxiv.org/abs/2303.02927)
<a target="_blank" href="https://colab.research.google.com/github/microsoft/lida/blob/main/notebooks/tutorial.ipynb">
<img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

<!-- <img src="docs/images/lidascreen.png" width="100%" /> -->

LIDA is a library for generating data visualizations and data-faithful infographics. LIDA is grammar agnostic (will work with any programming language and visualization libraries e.g. matplotlib, seaborn, altair, d3 etc) and works with multiple large language model providers (OpenAI, PaLM, Cohere, Huggingface). Details on the components of LIDA are described in the [paper here](https://arxiv.org/abs/2303.02927) and in this tutorial [notebook](notebooks/tutorial.ipynb).

> **Note on Code Execution:**
> To create visualizations, LIDA _generates_ and _executes_ code.
> Ensure that you run LIDA in a secure environment.

## Features

![lida components](docs/images/lidamodules.jpg)

LIDA treats _**visualizations as code**_ and provides utilities for generating, executing, editing, explaining, evaluating and repairing visualization code.

- [x] Data Summarization
- [x] Goal Generation
- [x] Visualization Generation
- [x] Visualization Editing
- [x] Visualization Explanation
- [x] Visualization Evaluation and Repair
- [x] Visualization Recommendation
- [x] Infographic Generation (beta)

## Getting Started

Setup and verify that your python environment is **`python 3.10`** or higher (preferably, use [Conda](https://docs.conda.io/en/main/miniconda.html#installing)). Install the library via pip.

```bash
pip install lida
```

Once requirements are met, setup your api key. Learn more about setting up keys for other LLM providers [here](https://github.com/victordibia/llmx).

```bash
export OPENAI_API_KEY=<your key>
```

Alternatively you can install the library in dev model by cloning this repo and running `pip install -e .` in the repository root.

## Web API and UI

LIDA comes with an optional bundled ui and web api that you can explore by running the following command:

```bash
lida ui  --port=8080 --docs
```

Then navigate to http://localhost:8080/ in your browser. To view the web api specification, add the `--docs` option to the cli command, and navigate to `http://localhost:8080/api/docs` in your browser.

The fastest and recommended way to get started after installation will be to try out the web ui above or run the [tutorial notebook](notebooks/tutorial.ipynb).

### Data Summarization

Given a dataset, generate a compact summary of the data.

```python
from lida.modules import Manager

lida = Manager()
summary = lida.summarize("data/cars.json") # generate data summary
```

### Goal Generation

Generate a set of visualization goals given a data summary.

```python
goals = lida.goals(summary, n=5) # generate goals
```

### Visualization Generation

Generate, refine, execute and filter visualization code given a data summary and visualization goal. Note that LIDA represents **visualizations as code**.

```python
# generate code specifications for charts
vis_specs = lida.visualize(summary=summary, goal=goals[0], library="matplotlib") # seaborn, ggplot ..

# execute code
charts = lida.execute(code_specs=vis_specs)
```

### Visualization Editing

Given a visualization, edit the visualization using natural language.

```python
# modify chart using natural language
instructions = ["convert this to a bar chart", "change the color to red", "change y axes label to Fuel Efficiency"]
vis_specs = lida.edit(code=charts[0].code,  summary=summary, instructions=instructions)
edited_chartspecs = lida.execute(code_specs=vis_specs, data=manager.data)

```

### Visualization Explanation

Given a visualization, generate a natural language explanation of the visualization code (accessibility, data transformations applied, visualization code)

```python
# generate explanation for chart
explanation = lida.explain(code=charts[0].code, summary=summary)
```

### Visualization Evaluation and Repair

Given a visualization, evaluate to find repair instructions (which may be human authored, or generated), repair the visualization.

```python
evaluations = lida.evaluate(code=code,  goal=goals[i], library=library)
```

### Visualization Recommendation

Given a dataset, generate a set of recommended visualizations.

```python
recommendations = lida.recommend(code=code, summary=summary, n=2,  textgen_config=textgen_config)
```

### Infographic Generation [TBD]

Given a visualization, generate a data-faithful infographic. Implementation in progress. This methods should be considered experimental, and uses stable diffusion models from huggingface underneath. You will need to run `pip install lida[infographics]` to install the required dependencies.

```python
infographics = lida.infographics(visualization = charts[0].raster, n=3, style_prompt="line art")
```

## Important Notes / Caveats

- LIDA generates and executes code based on provided input. Ensure that you run LIDA in a secure environment with appropriate permissions.
- LIDA currently works best with datasets that have a small number of columns (<= 10). This is mainly due to the limited context size for most models. For larger datasets, consider preprocessing your dataset to use a subset of the columns.
- LIDA assumes the dataset exists and is in a format that can be loaded into a pandas dataframe. For example, a csv file, or a json file with a list of objects. In practices the right dataset may need to be curated and preprocessed to ensure that it is suitable for the task at hand.

Naturally, some of these limitations could a much welcomed PR.

## Documentation and Citation

A short paper describing LIDA (Accepted at ACL 2023 Conference) is available [here](https://arxiv.org/abs/2303.02927).

```bibtex
@article{dibia2023lida,
      title={LIDA: A Tool for Automatic Generation of Grammar-Agnostic Visualizations and Infographics using Large Language Models},
      author={Victor Dibia},
      year={2023},
      eprint={2303.02927},
      archivePrefix={arXiv},
      primaryClass={cs.AI}
}
```

LIDA builds on insights in automatic generation of visualizaiton from an earlier paper - [Data2Vis: Automatic Generation of Data Visualizations Using Sequence to Sequence Recurrent Neural Networks](https://arxiv.org/abs/1804.03126).