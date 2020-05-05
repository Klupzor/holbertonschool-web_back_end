#!/usr/bin/env python3
"""Python and Async"""
import asyncio
import random
from typing import Optional


async def wait_random(max_delay: Optional[int] = 10) -> float:
    """returns delay value"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
